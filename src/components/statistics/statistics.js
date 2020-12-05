import React from "react";
import PropTypes from "prop-types";
import randomColor from "randomcolor";
import StatisticsStyles from "./statisticsStyles.js";

const {
  Stat,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} = StatisticsStyles;

function Statistics({ stats }) {
  return (
    <Stat>
      <StatTitle>Upload stats</StatTitle>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} rgb={randomColor}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Stat>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Statistics;
