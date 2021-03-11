import React from "react";
import PropTypes from "prop-types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
// import casual from "casual";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
function HomePage(props) {
  // cach 1
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  //cach 2 khong khuyen khich dung
  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }),shallowEqual);

  const dipatch = useDispatch();
  console.log("Hobby List: ", hobbyList);
  const handleAddHobbyClick = () => {
    //Random a hobby object :id + title
    const newId = randomNumber();
    const newHobby = {
      // id: casual.uuid,
      // title: casual.title,
      id: newId,
      title: `Hobby ${newId}`,
    };
    //dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dipatch(action);
  };
  const handleHobbyClick = (hobby) => {
    //dispatch action to active a new hobby to redux store
    const action = setActiveHobby( hobby);
    dipatch(action);
  };
  return (
    <div className="home-page">
      <h1>redux - hooks </h1>
      <button onClick={handleAddHobbyClick}> Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
