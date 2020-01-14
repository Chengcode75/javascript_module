<?php

namespace Drupal\fruit\Controller;

use Drupal\Core\Controller\ControllerBase;

Class FruitController extends ControllerBase{

		public function content() {
			$attachment['content'] = array(
					'#type' => 'markup',
					'#markup' => '<div class="btn">'.$this->t('Info'),
			);

			$attachment['#attached']['library'][] = 'fruit/global-script';

			return $attachment;
		}
	}
