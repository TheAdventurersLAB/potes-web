import { Summary } from "../Summary";
import { TemplateTable } from "../TemplateTable";
import { Container } from "./styles";

export function Dashboard () {
  return (
    <Container>
      <Summary />
      <TemplateTable />
    </Container>
  );
}