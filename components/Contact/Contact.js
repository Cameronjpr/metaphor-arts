import React from 'react';
import { StyledForm, StyledFormItem } from './Contact.styled'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <StyledForm method="POST">
        <ul>
          <StyledFormItem>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name"/>
          </StyledFormItem>
          <StyledFormItem>
            <label htmlFor="email">Email:</label>
            <input type="email" id="mail" name="user_email"/>
          </StyledFormItem>
          <StyledFormItem>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </StyledFormItem>
        </ul>
      </StyledForm>
    </section>
  );
}
