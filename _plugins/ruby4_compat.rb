# frozen_string_literal: true

# Jekyll 3 / Liquid 4 still call taint/trust APIs removed in Ruby 4.
# This shim restores no-op methods so the legacy stack can render locally.
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end

    def taint
      self
    end

    def untaint
      self
    end

    def untrusted?
      false
    end

    def trust
      self
    end

    def untrust
      self
    end
  end
end
