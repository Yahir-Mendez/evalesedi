"use client"

import {
  RiBankCard2Line,
  RiCustomerService2Fill,
  RiGlobalFill,
  RiUser2Fill,
  RiBook2Fill,
  RiDashboard2Fill
} from "@remixicon/react"

import { TabNavigation, TabNavigationLink } from "@/app/dashboard/components/tabNavigation/TabNavigation";

export const TabNav = () => (
  <TabNavigation className="gap-7">
    <TabNavigationLink href="#" active className="inline-flex gap-2">
      <RiDashboard2Fill className="size-4" aria-hidden="true" />
      Inicio
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiCustomerService2Fill className="-ml-1 size-4" aria-hidden="true" />
      Citas
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiBankCard2Line className="-ml-1 size-4" aria-hidden="true" />
      Transacciones
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiBook2Fill className="-ml-1 size-4" aria-hidden="true" />
      Cursos
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiUser2Fill className="-ml-1 size-4" aria-hidden="true" />
      Usuarios
    </TabNavigationLink>
    <TabNavigationLink href="#" className="inline-flex gap-2">
      <RiGlobalFill className="-ml-1 size-4" aria-hidden="true" />
      Web
    </TabNavigationLink>
    
  </TabNavigation>
)