const timeAgo = (dateString: string) => {
  const oneDayInMilliseconds = 86400000;
  const daysAgo =
    (new Date().valueOf() - new Date(dateString).valueOf()) /
    oneDayInMilliseconds;
  const rounded = Math.floor(daysAgo);

  if (rounded >= 365) {
    const years = Math.floor(rounded / 365);
    const modifier = years > 1 ? "S" : "";
    return `${years} YEAR${modifier} AGO`;
  }

  if (rounded > 1) return `${rounded} DAYS AGO`;

  return rounded === 1 ? "YESTERDAY" : "TODAY";
};

export default timeAgo;
