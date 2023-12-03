export const PIXELATED_EFFECT_IMAGE_PROPS = {
  src: { type: String, required: true },

  format: { type: String, default: "webp" },
  quality: { type: [Number, String], default: undefined },
  background: { type: String, default: undefined },
  fit: { type: String, default: undefined },
  modifiers: { type: Object as () => Record<string, any>, default: undefined },

  preset: { type: String, default: undefined },
  provider: { type: String, default: undefined },

  sizes: {
    type: [Object, String] as unknown as () => string | Record<string, any>,
    default: undefined,
  },
  densities: { type: String, default: undefined },
  preload: { type: Boolean, default: undefined },

  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined },
  alt: { type: String, default: undefined },
  referrerpolicy: { type: String, default: undefined },
  usemap: { type: String, default: undefined },
  longdesc: { type: String, default: undefined },
  ismap: { type: Boolean, default: undefined },
  loading: {
    type: String as () => "lazy" | "eager",
    default: undefined,
    validator: (val: any) => ["lazy", "eager"].includes(val),
  },
  crossorigin: {
    type: [Boolean, String] as unknown as () =>
      | "anonymous"
      | "use-credentials"
      | boolean,
    default: undefined,
    validator: (val: any) =>
      ["anonymous", "use-credentials", "", true, false].includes(val),
  },
  decoding: {
    type: String as () => "async" | "auto" | "sync",
    default: undefined,
    validator: (val: any) => ["async", "auto", "sync"].includes(val),
  },
  nonce: { type: [String], default: undefined },

  placeholder: { type: [Boolean, String, Number, Array], default: undefined },
};
