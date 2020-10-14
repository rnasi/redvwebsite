import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Features from "../components/features"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Subscribe from "../components/subscribe"

import {useSiteMetadata} from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    "hero": Hero,
    "features": Features,
    "call-to-action": CalltoAction,
    "screenshots": Screenshots,
    "subscribe": Subscribe
  }

  return(
    <>
      <Layout>
        { sections.map(section => {
          let Tagname = availableSections[section]
          return <Tagname />
        }) }
      </Layout>
    </>
  )
}
