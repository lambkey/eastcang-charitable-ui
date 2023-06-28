
<template>
  <div class="news-page">
    <div class="news-list">
      <ul class="news-items">
        <li v-for="newsItem in newsItems" :key="newsItem.id" class="news-item" @click="selectedNewsId = newsItem.id">
          <div class="news-thumbnail">
            <img :src="newsItem.image" alt="News Thumbnail" class="thumbnail-image">
          </div>
          <div class="news-content">
            <h3 class="news-title">{{ newsItem.title }}</h3>
            <p class="news-description">{{ newsItem.description }}</p>
            <div class="news-footer">
              <span class="news-date">{{ formatDate(newsItem.date) }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="news-details" v-if="selectedNewsItem">
      <h4 class="title">{{ selectedNewsItem.title }}</h4>

      <div class="divider"></div>

      <div height="500px" class="news-details-content" >
        <div  v-html="selectedNewsItem.content"></div>
      </div>

      <div class="divider"></div>

      <div class="author-info">
        <p>作者:{{selectedNewsItem.author}}</p>
        <p>发布日期:{{selectedNewsItem.date}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  data() {
    return {
      newsItems: [

        {
          id: 2,
          title: '爱心 * 充满希望',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
          content: '当人们谈论人工智能（AI），往往会充满想象力和未来的期待。AI被视为现代科技的杰作，被认为具有巨大的潜力和影响力。它正在改变我们的生活方式、商业模式、医疗保健、交通运输等各个领域。<br><br>首先，让我们了解一下人工智能的发展历程。人工智能作为一门学科，起源可以追溯到上世纪50年代。早期的研究主要集中在基于符号的推理和逻辑推理系统上。然而，随着计算能力的提升和数据的丰富，机器学习和深度学习等技术逐渐崭露头角。<br><br>人工智能在各个领域的应用日益广泛。在医疗保健领域，AI被用于辅助诊断、医学影像分析和药物研发等方面。它能够帮助医生更准确地诊断疾病，并提供个性化的治疗方案。在交通运输领域，自动驾驶技术正逐渐成为现实，它有望提高交通安全性、减少交通堵塞，并节约能源。<br><br>然而，人工智能的快速发展也带来了一些潜在挑战和问题。首先是隐私和数据安全问题。AI系统需要大量的数据来进行学习和训练，但这也意味着个人隐私的泄露风险增加。如何平衡数据的使用和保护个人隐私之间的关系是一个重要的议题。其次是人工智能的公平性和透明性问题。AI系统的决策过程往往是复杂的黑盒子，很难解释其背后的逻辑和决策依据。这可能导致不公平的结果和难以接受的偏见。'
        },
        {
          id: 3,
          title: 'News 1',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
        },
        {
          id: 4,
          title: 'News 1',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
        },
        {
          id: 5,
          title: 'News 1',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
        },
        {
          id: 7,
          title: 'News 1',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
        },
        {
          id: 8,
          title: 'News 1',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
        },
        {
          id: 9,
          title: 'News 1',
          description: 'This is the description of News 1.',
          image: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          date: '2023-06-01',
          link: 'news1-link',
        }
        // Add more news items here
      ],
      selectedNewsId: null,
    };
  },
  computed: {
    selectedNewsItem() {
      return this.newsItems.find(item => item.id === this.selectedNewsId);
    },
  },
  mounted() {

  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },

  },
};
</script>

<style>
.news-page {
  display: flex;
  justify-content: center;
  padding: 20px;
  max-width: 1535px; /* Set a maximum width for the container */
  margin: 0 auto; /* Center the container on the page */
}

.news-list {
  width: 40%;
  padding: 20px;
  margin-right: 20px;
  max-width: 800px;
  height: 1000px; /* Set a higher fixed height for the container */
  overflow-y: auto; /* Add a scrollbar when content exceeds the container height */
}

.news-items {
  list-style: none;
  padding: 0;
}

.news-item {
  display: flex;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.news-item:hover {
  background-color: #e6e6e6;
}

.news-thumbnail {
  flex: 0 0 150px;
  overflow: hidden;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.news-content {
  flex: 1;
  padding: 20px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.news-description {
  color: #555;
  line-height: 1.4;
  margin-bottom: 10px;
}

.news-footer {
  display: flex;
  align-items: center;
}

.news-date {
  margin-right: 10px;
  color: #888;
  font-size: 14px;
}

.news-details {
  margin-top: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  flex-grow: 1;
  height: 980px; /* Set a higher fixed height for the container */
  width: calc(60% - 40px); /* Set a fixed width for the container */
  /*overflow-y: auto; !* Add a scrollbar when content exceeds the container height *!*/
}
.news-details-content {
  height: 500px;
  overflow-y: auto;
}
.title {
  font-family: "Impact", Charcoal, sans-serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
}

.divider {
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}

.author-info {
  margin: 20px 0 80px 80%;
}


.scrollbar-demo-item {
  overflow-y: auto;
}
/* Hide the default scrollbar */
.scrollbar-demo-item::-webkit-scrollbar {
  width: 0.8em;
}

/* Track */
.scrollbar-demo-item::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scrollbar-demo-item::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

/* Handle on hover */
.scrollbar-demo-item::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>


