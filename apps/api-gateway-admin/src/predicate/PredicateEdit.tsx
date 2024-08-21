import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PredicateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="path" source="path" />
      </SimpleForm>
    </Edit>
  );
};
