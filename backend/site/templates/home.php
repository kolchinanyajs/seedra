<?php

$data = [
  'title' => $page->title()->value(),
  'caption' => $page->caption()->value(),
  'description' => $page->description()->value()
];

$kirby->response()->json();
echo json_encode($data);
