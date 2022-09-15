export const getComments = (postId) => {

  //api call /post/{postId}/comments
  return [
    {
      id: "1",
      body: "Comment 1",
      username: "Sheela",
      userId: "1",
      parentId: null,
      createdAt: "2021-12-09T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Comment 2",
      username: "Ram",
      userId: "2",
      parentId: null,
      createdAt: "2021-12-09T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Ram",
      userId: "2",
      parentId: "1",
      createdAt: "2021-12-09T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Ram",
      userId: "2",
      parentId: "2",
      createdAt: "2021-12-09T23:00:33.010+02:00",
    },
  ];
};