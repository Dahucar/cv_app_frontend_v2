// react or dodule imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// component imports
import { Button, Row } from "react-bootstrap";
import { ModalResumeItem } from "./ModalResumeItem";
import { SkillItems } from "./items/SkillItems";
// helper imports
import { initialSkillsInput } from "../../../helpers/initialFormItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
// action of reducer imports
import {
  syncOpenModal,
  syncCloseModal,
} from "../../../redux/actions/uiActions";
import { asyncLoadSkills } from "../../../redux/actions/skillAction";

export const SkillsScreen = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.ui);
  const { skillItems } = useSelector((state) => state.skill);

  useEffect(() => {
    console.log("useEffect");
    dispatch(asyncLoadSkills());
  }, [dispatch]);

  console.log(skillItems);
  const handlerOpenModal = () => {
    dispatch(syncOpenModal());
  };

  const handlerCloseModal = () => {
    dispatch(syncCloseModal());
  };

  return (
    <>
      <Button
        variant="dark"
        className="container w-75 mt-2"
        block
        size="sm"
        onClick={handlerOpenModal}
      >
        Add new skill <i className="fa fa-plus my-float"></i>
      </Button>
      <Row className="m-3">
        {skillItems.map((skill) => (
          <SkillItems
            key={skill._id}
            id={skill._id}
            name={skill.skillName}
            exp={skill.skillExperience}
            createAd={skill.createdAt}
          />
        ))}
      </Row>
      {isOpen && (
        <ModalResumeItem
          toDispatch={typesToDispatchForm.skills}
          itemsFormModal={initialSkillsInput}
          onShow={isOpen}
          onHide={handlerCloseModal}
          title="Add your new skill item"
        />
      )}
    </>
  );
};
