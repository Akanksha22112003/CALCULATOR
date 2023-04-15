const result = document.getElementById("result");

const keys = document.querySelectorAll("button");

const operators = document.querySelectorAll(".operator");




keys.forEach(key => {

  key.addEventListener("click", () => {

    if (key.id === "clear") {

      result.value = "";

    } else if (key.id === "equal") {

      try {

        result.value = eval(result.value);

      } catch (error) {

        result.value = "Error";

      }

    } else {

      result.value += key.value;

    }

  });

});




operators.forEach(operator => {

  operator.addEventListener("click", () => {

    if (result.value !== "" && !isNaN(result.value.slice(-1))) {

      result.value += operator.value;

    }

  });

});