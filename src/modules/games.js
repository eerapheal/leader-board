const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qk2WUFC6s8bpESSfLGKS/scores';

const fetchScores = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
};

