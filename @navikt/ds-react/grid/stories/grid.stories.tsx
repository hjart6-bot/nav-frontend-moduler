import React from "react";
import { Container, Grid, Cell } from "../src/index";

export default {
  title: "@navikt/grid",
  component: { Container, Grid, Cell },
};

export const All = () => (
  <Container style={styles.container}>
    <Grid>
      <Cell style={styles.cell} sm={4} md={8} lg={3}>
        Kolonne
      </Cell>
      <Cell style={styles.cell} sm={4} md={4} lg={6}>
        Kolonne
      </Cell>
      <Cell style={styles.cell} sm={4} md={4} lg={3}>
        Kolonne
      </Cell>
    </Grid>
  </Container>
);

const styles = {
  container: { background: "rgba(0, 0, 0, 0.2)" },
  cell: { background: "rgba(0, 0, 0, 0.2)" },
};
