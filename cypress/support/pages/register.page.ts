export class RegisterPage {
  REGISTER_URL = "/auth/sign-up";
  visit(): void {
    cy.visit(this.REGISTER_URL);
  }
  setUserName(username: string): void {
    cy.get("#username").clear().type(username);
  }

  fillValid(): void {
    this.setUserName("");
  }
}
