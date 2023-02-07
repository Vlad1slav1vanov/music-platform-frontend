import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonBackProps {
  path: string;
}

const ButtonBack: React.FC<ButtonBackProps> = ({path}) => {
  const navigate = useNavigate();
  return (
    <Button
    variant="outlined"
    onClick={() => navigate(`${path}`)}
    >
      Назад
    </Button>
  )
}

export default ButtonBack;