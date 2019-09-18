import React from "react";
import { connect } from "react-redux";
import { filterMuscles, filterEquipment } from "../../store/actions/exerciseActions";
import { Tag } from "antd";

class FilterTag extends React.Component {
  state = { checked: false };

  handleChange = (checked, text) => {
    this.setState({ checked });
    this.props.filter === 'equipment' ? this.props.filterEquipment(text, checked) :
    this.props.filterMuscles(text, checked);
  };

  render() {
    const spanProps = {...this.props};
    delete spanProps.filterMuscles;
    delete spanProps.filterEquipment;
    return (
      <>
        <Tag.CheckableTag
          {...spanProps}
          checked={this.state.checked}
          onChange={checked => this.handleChange(checked, this.props.children)}
        />
      </>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      exercises: state.exercises.remainingExercises
    };
  },
  { filterMuscles, filterEquipment }
)(FilterTag);
