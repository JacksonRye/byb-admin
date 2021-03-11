import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

import { firebaseConfig as config, options } from "./FIREBASE_CONFIG";
import MyLoginPage from "./LoginPage";
import { StudentList, StudentCreate, StudentEdit } from "./Students";

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const App = () => (
  <Admin
    loginPage={MyLoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="students"
      list={StudentList}
      create={StudentCreate}
      edit={StudentEdit}
    />
  </Admin>
);

export default App;
