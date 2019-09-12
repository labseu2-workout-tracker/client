import React from "react";
import { fetchWorkouts } from "../../../../store/actions/workoutsActions";
import { fetchWorkoutsHistory } from "../../../../store/actions/historyActions";
import { Card } from "antd";
import { connect } from "react-redux";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const { Meta } = Card;