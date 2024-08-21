import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PredicateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="path" source="path" />
      </SimpleForm>
    </Create>
  );
};
