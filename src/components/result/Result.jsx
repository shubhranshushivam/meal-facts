import React from "react";
import "./result.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Result({ toggleViewFn }) {
  return (
    <div className="result" id="result">
      <div className="container">
        <div className="midComponent">
          <div className="left">
              <button type="submit" className="btn" onClick={() => toggleViewFn()}>
                <ArrowBackIcon />
                <h5>Back</h5>
              </button>
            <img src="assets/sample_food.jpg" alt="" />
          </div>
          <div className="right">
            <div className="heading">
              <h2>Noodles</h2>
              <h3>Calories: 220Kcal</h3>
            </div>
            <div className="recipe">
              Heat the oil in a medium saucepan and add the chilli. Cook for 1
              min, then add the curry paste, stir and cook for 1 min more.
              Dissolve the stock cube in a large jug in 700ml boiling water,
              then pour into the pan and stir to combine. Tip in the coconut
              milk and bring to the boil. Add the fish sauce and a little
              seasoning. Toss in the noodles and cook for a further 3-4 mins
              until softening. Squeeze in the lime juice, add the prawns and
              cook through until warm, about 2-3 mins. Scatter over some of the
              coriander.Serve in bowls with the remaining coriander and lime
              wedges on top for squeezing over.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
