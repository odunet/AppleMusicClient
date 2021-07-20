import axios from 'axios';

export const getData = async (url, page, size) => {
  try {
    let response = await axios({
      url: url,
      method: 'get',
    });

    let PAGE_SIZE = 20;
    let page = 1;
    let skip;

    if (page) {
      page = Number(page);
      skip = (page - 1) * PAGE_SIZE;
    }

    if (size) {
      PAGE_SIZE = Number(size);
      skip = (page - 1) * PAGE_SIZE;
    }

    let data = {
      statusCode: '200',
      message: 'successful',
      documentCount: response.data.feed.entry.length,
      totalPages: Math.ceil(response.data.feed.entry.length / PAGE_SIZE),
      nextPage:
        Math.ceil(response.data.feed.entry.length / PAGE_SIZE) > page
          ? `${page + 1}`
          : null,
      skip: skip,
      data: response.data.feed.entry,
    };

    return data;
  } catch (err) {
    return { message: err.message };
  }
};
