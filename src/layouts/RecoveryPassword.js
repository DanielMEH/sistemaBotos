import React from 'react'

export const RecoveryPassword = () => {
  return (
   <>
   <div class="block p-6 absolute m-auto inset-0 h-fit rounded-lg shadow-lg bg-white max-w-sm">
  <form>
    <div class="form-group  h-fit">
      <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
        placeholder="Ingrese su correo electronico"/>
    </div>
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Subscribe</button>
  </form>
</div>


   </>
  )
}
