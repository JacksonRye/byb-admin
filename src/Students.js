// import { db } from "./FIREBASE_CONFIG";
// import firebase from "firebase/app";
// import { states } from "choices";

import React from "react";
import {
  AutocompleteInput,
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  FileInput,
  ImageField,
  List,
  RadioButtonGroupInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import { states } from "./choices";

export const StudentList = (props) => (
  <List {...props}>
    <Datagrid>
      <ImageField source="pictures.src" title="Profile Pic" />
      <TextField source="name" />
      <TextField source="basic_no" />
      <TextField source="sex" />
      <TextField source="email" />
      <DateField source="date_of_birth" />
      <TextField source="state" />
      <TextField source="lga" />
      <TextField source="phone_no" />
      <TextField source="dept" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

const genders = [
  { id: "M", name: "Male" },
  { id: "F", name: "Female" },
];

export const StudentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <FileInput source="pictures" label="Profile Pic" accept="image/*">
        <ImageField source="src" title="title" />
      </FileInput>
      <TextInput source="name" />
      <TextInput source="basic_no" />
      <RadioButtonGroupInput source="sex" choices={genders} />
      <TextInput label="Email Address" source="email" type="email" />
      <DateInput source="date_of_birth" />
      <AutocompleteInput source="state" choices={states} />
      {/* <AutocompleteInput source="lga" choices={LGA} /> */}
      <TextInput source="lga" />
      <TextInput source="phone_no" />
      <TextInput source="dept" />
    </SimpleForm>
  </Create>
);

export const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <FileInput source="pictures" label="Profile Pic" accept="image/*">
        <ImageField source="src" title="title" />
      </FileInput>
      <TextInput source="name" />
      <TextInput source="basic_no" />
      <RadioButtonGroupInput source="sex" choices={genders} />
      <TextInput label="Email Address" source="email" type="email" />
      <DateInput source="date_of_birth" />
      <AutocompleteInput source="state" choices={states} />
      {/* <AutocompleteInput source="lga" choices={LGA} /> */}
      <TextInput source="lga" />
      <TextInput source="phone_no" />
      <TextInput source="dept" />
    </SimpleForm>
  </Edit>
);
