import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { PredicateList } from "./predicate/PredicateList";
import { PredicateCreate } from "./predicate/PredicateCreate";
import { PredicateEdit } from "./predicate/PredicateEdit";
import { PredicateShow } from "./predicate/PredicateShow";
import { FilterList } from "./filter/FilterList";
import { FilterCreate } from "./filter/FilterCreate";
import { FilterEdit } from "./filter/FilterEdit";
import { FilterShow } from "./filter/FilterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"API Gateway"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
        <Resource
          name="Predicate"
          list={PredicateList}
          edit={PredicateEdit}
          create={PredicateCreate}
          show={PredicateShow}
        />
        <Resource
          name="Filter"
          list={FilterList}
          edit={FilterEdit}
          create={FilterCreate}
          show={FilterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
