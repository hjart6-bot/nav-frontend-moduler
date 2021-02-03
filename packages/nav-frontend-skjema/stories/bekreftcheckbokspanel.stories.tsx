import React from "react";
import { BekreftCheckboksPanel } from "../src/index";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Skjema",
  component: BekreftCheckboksPanel,
} as Meta;

export const BekreftCheckboks = () => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: "auto",
        rowGap: "2rem",
        gridAutoColumns: "fit-content",
      }}
    >
      <BekreftCheckboksPanel
        label="Ja, jeg samtykker"
        checked
        onChange={() => null}
      >
        For å gå videre må du samtykke til at vi får lov til å innhente og
        behandle persondata om deg. Les mer om hvilke data vi henter og hvordan
        vi behandler disse dataene.
      </BekreftCheckboksPanel>

      <BekreftCheckboksPanel
        label="Ja, jeg samtykker"
        checked={false}
        onChange={() => null}
      >
        For å gå videre må du samtykke til at vi får lov til å innhente og
        behandle persondata om deg. Les mer om hvilke data vi henter og hvordan
        vi behandler disse dataene.
      </BekreftCheckboksPanel>

      <BekreftCheckboksPanel
        feil={"Du må bekrefte før søknaden kan sendes inn."}
        label="Ja, jeg samtykker"
        checked={false}
        onChange={() => null}
      >
        For å gå videre må du samtykke til at vi får lov til å innhente og
        behandle persondata om deg. Les mer om hvilke data vi henter og hvordan
        vi behandler disse dataene.
      </BekreftCheckboksPanel>
    </div>
  );
};