import { Container, TextField } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyTable from "../Components/MyTable";
import { getTeacher } from "../Redux/app/action";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const teachers = useSelector((state) => state.app.teachers);
  const allPages = useSelector((state) => state.app.totalPage);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [sorting, setSorting] = useState("");
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const handleTeacherClick = (id) => {
    history.push(`/teacher/${id}`);
  };
  useEffect(() => {
    console.log(gender);
    dispatch(getTeacher(token, search, page, sorting, order, gender));
  }, [page, search, page, sorting, order, gender]);
  return (
    <Container style={{ marginTop: 100, textAlign: "left" }}>
      <TextField
        id="outlined-basic"
        label="Enter name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label>Filter By Gender </label>
          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
            name="gender"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Sort By Age</label>
          <select
            onChange={(e) => {
              setOrder(e.target.value);
              setSorting("age");
            }}
            name="sort"
          >
            <option value="">Default</option>
            <option value="asc">Ascending</option>
            <option value="dcs">Descending</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <MyTable teachers={teachers} handleTeacherClick={handleTeacherClick} />
      <Pagination
        count={allPages}
        onChange={(event, value) => setPage(value)}
      />
    </Container>
  );
}
