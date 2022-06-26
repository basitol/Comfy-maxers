import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import "./search.scss";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <Form className="flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="search products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="p-2"
        onClick={submitHandler}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SearchBox;
