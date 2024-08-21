import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="uri" source="uri" />
      </SimpleForm>
    </Create>
  );
};
