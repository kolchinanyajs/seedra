<?php

$data = [
  'name' => $page->name()->value(),
  'price' => $page->price()->value(),
];

$kirby->response()->json();
echo json_encode($data);
