const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "JavaGuide",
  description: "Java学习&&面试指南",
  dest: "./dist",
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",
    author: "Guide哥",
    repo: "https://github.com/Snailclimb/JavaGuide",
    nav: [
      { text: "Java面试指南", icon: "creative", link: "/", },
      { text: "IDEA指南", icon: "creative", link: "/idea-tutorial/", },
      {
        text: "PDF资源", icon: "file",
        items: [
          {
            text: "JavaGuide面试突击版",
            link: "https://t.1yb.co/Fy1e",
          },
          {
            text: "消息队列常见知识点&面试题总结",
            link: "https://t.1yb.co/Fy0u",
          },
        ],
      }
    ],
    sidebar: {
      // 应该把更精确的路径放置在前边
      '/idea-tutorial/':
        [
          {
            title: "IDEA小技巧",
            icon: "creative",
            prefix: "idea-tips/",
            collapsable: false,
            children: [
              "idea-refractor-intro",
              "idea-plug-in-development-intro",
              "idea-source-code-reading-skills",
            ]
          },
          {
            title: "IDEA插件推荐",
            icon: "plugin",
            collapsable: false,
            children: [
              "idea-plugins/shortcut-key",
              "idea-plugins/idea-themes",
              "idea-plugins/improve-code",
              "idea-plugins/interface-beautification",
              "idea-plugins/camel-case",
              "idea-plugins/code-glance",
              "idea-plugins/code-statistic",
              "idea-plugins/git-commit-template",
              "idea-plugins/gson-format",
              "idea-plugins/idea-features-trainer",
              "idea-plugins/jclasslib",
              "idea-plugins/maven-helper",
              "idea-plugins/rest-devlop",
              "idea-plugins/save-actions",
              "idea-plugins/sequence-diagram",
              "idea-plugins/translation",
            ]
          },
        ],
      // 必须放在最后面
      '/': [{
        title: "Java", icon: "java", prefix: "java/",
        children: [
          {
            title: "基础", prefix: "basis/",
            children: [
              "java基础知识总结",
              {
                title: "重要知识点",
                children: ["反射机制详解", "代理模式详解", "io模型详解"],
              },],
          },
          {
            title: "容器", prefix: "collection/",
            children: [
              "java集合框架基础知识&面试题总结", "java集合使用注意事项总结",
              {
                title: "源码分析",
                children: ["arraylist-source-code", "hashmap-source-code", "concurrent-hash-map-source-code"],
              },],
          },
          {
            title: "并发编程", prefix: "concurrent/",
            children: [
              "java并发基础常见面试题总结", "java并发进阶常见面试题总结",
              {
                title: "重要知识点",
                children: ["并发容器总结", "java线程池学习总结", "拿来即用的java线程池最佳实践", "aqs原理以及aqs同步组件总结", "reentrantlock",
                  "atomic原子类总结", "threadlocal", "completablefuture-intro"],
              },
            ],
          },
          {
            title: "JVM", prefix: "jvm/",
            children: ["内存区域", "jvm垃圾回收", "类文件结构", "类加载过程", "类加载器", "jvm参数指南", "[加餐]大白话带你认识jvm"],
          },
          {
            title: "新特性", prefix: "new-features/",
            children: ["java8-common-new-features", "java8新特性总结", "java新特性总结"],
          },
          {
            title: "小技巧", prefix: "tips/",
            children: ["locate-performance-problems/手把手教你定位常见Java性能问题", "jad反编译tricks"],
          },
        ],
      },
      {
        title: "计算机基础", icon: "computer", prefix: "cs-basics/",
        children: [
          {
            title: "计算机网络", prefix: "network/",
            children: [
              "计算机网络常见面试题", "谢希仁老师的《计算机网络》内容总结", "HTTPS中的TLS"
            ],
          },
          {
            title: "操作系统", prefix: "operating-system/",
            children: [
              "basis", "linux", "shell"
            ],
          },
          {
            title: "数据结构", prefix: "data-structure/",
            children: [
              "线性数据结构", "图", "堆", "树", "bloom-filter"
            ],
          },
          {
            title: "算法", prefix: "algorithms/",
            children: [
              "几道常见的字符串算法题", "几道常见的链表算法题", "剑指offer部分编程题"
            ],
          },
        ],

      },
      {
        title: "数据库", icon: "workingDirectory", prefix: "database/",
        children: [
          "数据库基础知识",
          "字符集",
          {
            title: "MySQL", prefix: "mysql/",
            children: [
              "mysql知识点&面试题总结",
              "a-thousand-lines-of-mysql-study-notes",
              "mysql-high-performance-optimization-specification-recommendations",
              "mysql-index", "mysql-logs", "transaction-isolation-level",
              "innodb-implementation-of-mvcc", "how-sql-executed-in-mysql",
              "some-thoughts-on-database-storage-time"
            ],
          },
          {
            title: "Redis", prefix: "redis/",
            children: ["redis-all", "3-commonly-used-cache-read-and-write-strategies"],
          },
        ],
      },
      {
        title: "系统设计", icon: "workingDirectory", prefix: "system-design/",
        children: [
          {
            title: "基础", prefix: "basis/",
            children: [
              "RESTfulAPI",
              "naming",
            ],
          },
          {
            title: "常用框架", prefix: "framework/",
            children: [{
              title: "Spring", prefix: "spring/",
              children: ["Spring常见问题总结", "Spring&SpringBoot常用注解总结", "Spring事务总结", "Spring设计模式总结", "SpringBoot自动装配原理"]
            },
              "mybatis/mybatis-interview", "netty",
            ],
          },
          {
            title: "安全", prefix: "security/",
            children: ["basis-of-authority-certification", "jwt优缺点分析以及常见问题解决方案", "sso-intro", "数据脱敏"]
          },
        ],
      },
      {
        title: "分布式", icon: "workingDirectory", prefix: "distributed-system/",
        children: [
          {
            title: "理论&算法", prefix: "理论&算法/",
            children: ["cap&base理论", "paxos&raft算法"],
          },
          "api-gateway", "distributed-id",
          {
            title: "rpc", prefix: "rpc/",
            children: ["dubbo", "why-use-rpc"]
          },
          "distributed-transaction"
        ],
      }, {
        title: "高性能", icon: "workingDirectory", prefix: "high-performance/",
        children: [
          "读写分离&分库分表", "负载均衡",
          {
            title: "消息队列", prefix: "message-queue/",
            children: ["message-queue", "kafka知识点&面试题总结", "rocketmq-intro", "rocketmq-questions", "rabbitmq-intro"],
          },
        ],
      }, {
        title: "高可用", icon: "workingDirectory", prefix: "high-availability/",
        children: [
          "高可用系统设计", "limit-request", "降级&熔断", "超时和重试机制", "集群", "灾备设计和异地多活", "性能测试"
        ],
      }],
    },
    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://zhihu.com",
        Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
