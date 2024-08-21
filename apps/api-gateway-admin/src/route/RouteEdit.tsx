import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="uri" source="uri" />
      </SimpleForm>
    </Edit>
  );
};
