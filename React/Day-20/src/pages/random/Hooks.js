import { useEffect, useState } from "react";

const SomeComponent = () => {
  useEffect(() => {
    console.log("I am mounted");

    return () => {
      console.log("I am being removed");
    };
  }, []);

  return <h2>I am some component</h2>;
};

const TestUseEffect = () => {
  const [text, setText] = useState("random test");
  const [oneText, setOneText] = useState("one text");
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    // Combination of componentDidMount and componentDidUpdate
    console.log("This is use effect without dependencies");
  });

  useEffect(() => {
    // ComponentDidMount
    console.log("This is use effect with empty dependencies");
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log("This is use effect with some dependencies");
  }, [text]);

  useEffect(() => {
    console.log("oneText Changed");
  }, [oneText]);

  const changeStateHandler = () => {
    setText("more random : " + Math.random());
  };

  const changeOneText = () => {
    setOneText("one text random : " + Math.random());
  };

  const hideComponent = () => {
    setShowComponent((currentState) => {
      return !currentState;
    });
  };

  return (
    <>
      <h1>Use Effect Test Component </h1>
      <br />

      <p> My state : {text}</p>
      <button onClick={changeStateHandler}> Change Text </button>

      <br />
      <br />
      <br />

      <p> My state : {oneText}</p>
      <button onClick={changeOneText}> Change One Text </button>

      <br />
      <br />
      <br />

      {showComponent && <SomeComponent></SomeComponent>}
      <button onClick={hideComponent}> Toggle Show Component </button>
    </>
  );
};

export default TestUseEffect;
