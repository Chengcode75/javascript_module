<?php

namespace Drupal\fruit\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class FruitController.
 */
class FruitController extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  public function content() {
    $attachment['content'] = [
      '#type' => 'markup',
      '#markup' => '<div class="btn">' . $this->t('Info'),
    ];
    $attachment['#attached']['library'][] = 'fruit/global-script';
    return $attachment;
  }

}
