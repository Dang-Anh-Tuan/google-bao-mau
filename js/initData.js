const record1 = {
  id: 1,
  name: "Khảo sát diễn viên JAV nổi tiếng",
  description: "mô tả ngắn",
  createdBy: {
    name: "Đinh Hữu Nguyện",
    avatar:
      "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg",
    email: "huuno123@email.com",
  },
  createdAt: new Date(),
  amountAnswer: 12,
  tags: ["jav", "dienvien", "blabla"],
  questions: [
    // {
    //   id : 1,
    //   question : 'cau hoi 1',
    //   type : 'input?checkbox|radio',
    //   options : [
    //     {
    //       id: 23,
    //       name: 'lua chon A'
    //     },
    //     {

    //     }
    //   ],
    //   answer : [23,34,45]
    // }
  ],
};

const record2 = {
  id: 2,
  name: "Khảo sát diễn viên VAV nổi tiếng",
  description: "mô tả ngắn",
  createdBy: {
    name: "Đinh Hữu Nguyện",
    avatar:
      "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg",
    email: "huuno123@email.com",
  },
  createdAt: new Date(),
  amountAnswer: 12,
  tags: ["jav", "dienvien", "blabla"],
  questions: [],
};


const record3 = {
  id: 3,
  name: "Khảo sát chị hàng xóm",
  description: "mô tả ngắn",
  createdBy: {
    name: "Đinh Hữu Nguyện",
    avatar:
      "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg",
    email: "huuno123@email.com",
  },
  createdAt: new Date(),
  amountAnswer: 12,
  tags: ["jav", "dienvien", "blabla"],
  questions: [],
};

const initData = [record1, record2, record3]

localStorage.setItem("forms", JSON.stringify(initData))