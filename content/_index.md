---
title: 'Home'
date: 2023-10-24
type: landing
sections:

  # Author
  - block: resume-biography
    content:
      # The user's folder name in content/authors/
      username: admin
    design:
      spacing:
        padding: [0, 0, 0, 0]
      biography:
        style: 'text-align: justify; font-size: 0.8em;'
      # Avatar customization
      avatar:
        size: medium  # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: rounded # Options: circle (default), square, rounded

  # Blog posts
  - block: collection
    content:
      filters:
        folders:
          - blog
    design:
      spacing:
        padding: ['3rem', 0, '6rem', 0]
  - block: markdown
    content:
      title: Want to support me?
      subtitle: Support your favourite creators while earning crypto.
      text: We are mostly active on the [HIVE](https://hiveonboard.com?ref=thatvirtualguy) blockchain. **NOTE:** we earn 3% commission of your HIVE rewards. You can change that at any time.
---
