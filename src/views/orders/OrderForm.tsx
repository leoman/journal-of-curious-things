import React, { useState, useCallback } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { OrderI } from "../../models/order";
import {
  FormTitle,
  Input,
  Label,
  FormWrapper,
  InputRow,
  Submit,
} from "./styles";

interface Props {
  onSubmit: (fields: any) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: "100%",
      marginTop: "16px",
    },
    switch: {
      textAlign: "center",
      marginTop: "16px",
    },
    buttonGroup: {
      marginTop: "16px",
    },
  })
);

// eslint-disable-next-line react/display-name
export default ({ onSubmit }: Props) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleName = useCallback(({ target: { value } }) => setName(value), [setName]);
  const handleEmail = useCallback(({ target: { value } }) => setEmail(value), [setEmail]);

  const handleSubmit = useCallback(
    () =>
      onSubmit({
        name,
        email,
      }),
    [
      name,
      email,
      onSubmit,
    ]
  );

  return (
    <FormWrapper>
      <FormTitle>Billing Details</FormTitle>
      <InputRow>
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          onChange={handleName}
          type="text"
          value={name}
        />
      </InputRow>
      <InputRow>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          onChange={handleEmail}
          type="text"
          value={email}
        />
      </InputRow>
      <div className={classes.buttonGroup}>
        <Submit
          onClick={handleSubmit}
        >
          Submit
        </Submit>
      </div>
    </FormWrapper>
  );
};
