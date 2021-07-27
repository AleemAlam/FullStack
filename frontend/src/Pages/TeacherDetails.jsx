import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getClass } from "../Redux/app/action";

export default function TeacherDetails() {
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const selectedTeacher = useSelector((state) => state.app.selectedTeacher);
  const classes = useSelector((state) => state.app.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClass(token, id));
  }, []);
  return (
    <Container style={{ textAlign: "left", marginTop: "100px" }}>
      <Typography variant="h3">
        Teacher Name: {selectedTeacher?.name}
      </Typography>
      <Typography variant="h4">Subject: {selectedTeacher?.subject}</Typography>
      <p style={{ marginTop: 30, marginLeft: 10 }}>All Classes</p>
      {classes.map((cls) => (
        <Box style={{ margin: 10 }} key={cls._id}>
          <Typography variant="body1">
            {cls.grade} - {cls.section}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}
