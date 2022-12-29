import Ajv, { JSONSchemaType } from "ajv";
const schema = {
  properties: {
    name: { type: "string" },
    namespace: { type: "string" },
    version: { type: "string" },
    description: { type: "string" },
    author: { type: "string" },
    match: { type: "string" },
    grant: { type: "string" },
  },
  optionalProperties: {
    sameversion: { type: "boolean", nullable: true },
  },
};

type Props = JSONSchemaType<typeof schema>;

export const validationJson = (data: any) => {
  const ajv = new Ajv();
  const validate = ajv.compile<Props>(schema);
  if (validate(data)) return data;
  return undefined;
};
