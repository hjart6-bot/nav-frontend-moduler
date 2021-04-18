import React, { useEffect } from "react";
import { Select } from "nav-frontend-skjema";
import { Input } from "nav-frontend-skjema";
import { CheckboxGruppe, Checkbox } from "nav-frontend-skjema";
import Page from "./Page";
import Tabs from "nav-frontend-tabs";
import Panel from "nav-frontend-paneler";

function Form() {
  return (
    <Page>
      <Tabs
        tabs={[{ label: "Første" }, { label: "Andre" }, { label: "Tredje" }]}
        onChange={() => {}}
      />
      <Panel
        border
        style={{
          borderTop: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <h1>Her er skjemaet mitt</h1>
        <p>
          <Select label="Hvilken land er best om sommeren?">
            <option value="">Velg land</option>
            <option value="norge">Norge</option>
            <option value="sverige">Sverige</option>
            <option value="danmark">Danmark</option>
          </Select>
        </p>
        <p>
          <Input label="Utdyp svaret ditt her" />
        </p>
        <p>
          <CheckboxGruppe legend="Hvor vil du sitte?">
            <Checkbox label={"Bakerst"} />
            <Checkbox label={"Midten"} />
            <Checkbox label={"Fremst"} />
          </CheckboxGruppe>
        </p>
      </Panel>
    </Page>
  );
}

export default Form;
