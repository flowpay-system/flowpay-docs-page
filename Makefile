SHELL := /bin/sh

PORT ?= 4000
HOST ?= 127.0.0.1
MD_GLOBS := "**/*.md"
FMT_GLOBS := "**/*.{md,json,yml,yaml}"
RUBY_MIN := 3.0.0
BUNDLER_MIN := 2.0.0
CLEAN_PATHS := _site .jekyll-cache .jekyll-metadata .sass-cache .bundle vendor/bundle
RUBY_COMPAT := ./_plugins/ruby4_compat.rb

.PHONY: help doctor check-ruby check-bundler install serve build clean lint format-check format check

help:
	@printf '%s\n' \
		'make doctor        valida Ruby e Bundler locais' \
		'make install       instala dependencias Ruby do Jekyll' \
		'make serve         sobe a docs localmente' \
		'make build         gera o site estatico em _site/' \
		'make clean         remove artefatos de build e caches locais' \
		'make lint          roda markdownlint nos .md' \
		'make format-check  valida formatacao com Prettier' \
		'make format        aplica formatacao com Prettier' \
		'make check         roda lint + format-check'

check-ruby:
	@ruby -e 'required = Gem::Version.new("$(RUBY_MIN)"); current = Gem::Version.new(RUBY_VERSION); abort("Ruby >= $(RUBY_MIN) obrigatorio. Atual: #{RUBY_VERSION}. Instale Ruby 3.x antes de usar Jekyll.") if current < required; puts "Ruby OK: #{RUBY_VERSION}"'

check-bundler:
	@ruby -rbundler -e 'required = Gem::Version.new("$(BUNDLER_MIN)"); current = Gem::Version.new(Bundler::VERSION); abort("Bundler >= $(BUNDLER_MIN) obrigatorio. Atual: #{Bundler::VERSION}. Rode: gem install bundler") if current < required; puts "Bundler OK: #{Bundler::VERSION}"'

doctor: check-ruby check-bundler
	@command -v npx >/dev/null 2>&1 || { echo "npx nao encontrado. Instale Node.js para lint e formatacao."; exit 1; }
	@echo "npx OK"

install: check-ruby check-bundler
	bundle install

serve: doctor
	RUBYOPT="-r$(RUBY_COMPAT)" bundle exec jekyll serve --host $(HOST) --port $(PORT) --livereload

build: doctor
	RUBYOPT="-r$(RUBY_COMPAT)" bundle exec jekyll build

clean:
	rm -rf $(CLEAN_PATHS)

lint:
	npx --yes markdownlint-cli2 $(MD_GLOBS)

format-check:
	npx --yes prettier@3.8.1 --check $(FMT_GLOBS)

format:
	npx --yes prettier@3.8.1 --write $(FMT_GLOBS)

check: lint format-check
