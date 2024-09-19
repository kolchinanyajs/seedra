<?php

$hero = $page->hero()->toObject();
$banner = $page->banner()->toObject();
$products = $page->products()->toObject();

$data = [
  'hero' => [
    'caption' => $hero->caption()->value(),
    'description' => $hero->description()->ktit(),
    'priceActual' => $hero->priceActual()->value(),
    'priceOld' => $hero->priceOld()->value(),
  ],
  'banner' => [
    'caption' => $banner->caption()->value(),
    'description' => $banner->description()->value(),
  ],
  'products' => [
    'caption' => $products->caption()->value(),
    'cards' => $products->cards()->toPages()->map(function ($page) {
      return [
        'title' => $page->title()->value(),
        'price' => $page->price()->value(),
        'url' => Url::path($page->url(), true),
      ];
    })->values(),
  ],
];

$kirby->response()->json();
echo json_encode($data);
