import Icon from 'packages/components/icon'; import Button from
'packages/components/button';

<template>
  <div>
    app
    <d-button type="primary">an</d-button>
    <d-button type="info" disabled></d-button>
    <d-button type="warning" disabled round icon="d-icon-jiazai"></d-button>
    <d-icon name="jiazai"></d-icon>
    <d-button-group>
      <d-button type="primary">an</d-button>
      <!-- <d-button type="info" disabled></d-button> -->
      <d-button type="success" ></d-button>
      <d-button type="rainbow" ></d-button>
      <d-button type="danger" ></d-button>
    </d-button-group>
  </div>
</template>
