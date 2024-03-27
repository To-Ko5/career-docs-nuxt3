<template>
  <header class="mt-5 mb-4 print:hidden">
    <div class="container max-w-4xl flex justify-between">
      <div class="flex items-center">
        <!-- <div className="mr-4">
          <Sidebar works="{works}" />
        </div> -->

        <div class="flex-1">
          <div class="font-bold">
            <a href="/">title</a>
          </div>
        </div>
      </div>

      <div class="flex items-center">
        <div class="hidden md:block mr-4">
          <AppPrintButton />
        </div>
        <AppThemeButton />
      </div>
    </div>
  </header>
</template>
