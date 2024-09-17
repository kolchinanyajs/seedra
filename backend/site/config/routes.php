<?php

use Kirby\Cms\Url;

return [
  [
    'pattern' => '(:all)',
    'method' => 'GET',
    'action'  => function () {
      $requestHeader = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? null;

      if (option('debug') !== true && $requestHeader !== 'fetch') {
        go(site()->panel()->url());
      }

      $this->next();
    }
  ],
  [
    'pattern' => 'sitemap.xml',
    'action'  => function() {
        $pages = site()->pages()->index();
        $ignore = kirby()->option('sitemap.ignore', ['error']);

        $content = snippet('sitemap', compact('pages', 'ignore'), true);

        return new Kirby\Cms\Response($content, 'application/xml');
    }
  ],
  [
    'pattern' => 'sitemap',
    'action'  => function() {
      return go('sitemap.xml', 301);
    }
  ]
];
