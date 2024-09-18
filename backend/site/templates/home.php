<?php

$hero = $page->hero()->toObject();
$banner = $page->banner()->toObject();

$data = [
  'hero' => [
    'caption' => $hero->caption()->value(),
    'description' => $hero->description()->value(),
  ],
  'banner' => [
    'caption' => $banner->caption()->value(),
    'description' => $banner->description()->value(),
  ],
];

$kirby->response()->json();
echo json_encode($data);
