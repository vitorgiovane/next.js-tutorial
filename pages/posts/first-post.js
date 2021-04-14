import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, alias ex voluptate culpa nam quae consequatur accusantium, fugiat eius iure repudiandae aliquid officiis inventore rerum ratione totam, repellat quod illum?</p>
      <p>Itaque dolorem eum nam exercitationem ex repudiandae mollitia numquam facere aliquid assumenda sed rem in minima sit sunt est et placeat possimus consequuntur nesciunt deleniti aliquam, pariatur recusandae eligendi! Consequuntur.</p>
      <p>Quia maiores, perspiciatis cumque fugiat nostrum ullam natus inventore recusandae id est nesciunt repellat illo, placeat commodi sequi facilis. Recusandae, animi incidunt! Fuga dicta cum accusamus enim perspiciatis quae alias!</p>
      <p>Ipsam exercitationem eligendi recusandae molestiae illo architecto. Ipsam nostrum maiores exercitationem nemo, ut cum pariatur maxime beatae quisquam, dolorem enim ullam voluptates, delectus sed cupiditate sit. Pariatur fugiat earum facilis.</p>
      <p>Natus rerum, impedit error ipsam doloremque minus sed deleniti exercitationem molestias dolores soluta illum animi aut tempore voluptatibus. Tenetur consequuntur delectus dicta ducimus exercitationem omnis impedit repellat suscipit a fugit.</p>
      <p>Deserunt nam iste incidunt ipsam tenetur atque repellat esse temporibus magnam voluptas commodi odit, distinctio omnis quis quasi nostrum hic consequatur. Doloremque eligendi soluta deserunt autem dolore eius itaque impedit?</p>
      <p>In laudantium culpa nisi? Sunt odit quos ut quae dolorum quod impedit tempore! Architecto deserunt delectus reprehenderit dignissimos, vel nostrum accusamus labore commodi itaque ex repellat nisi, neque consequatur! At.</p>
      <p>Commodi quis unde iusto voluptatem asperiores minima tempore perspiciatis repudiandae, quia rerum obcaecati totam omnis odit fuga animi consequatur distinctio voluptas! Sequi vitae quisquam fugit excepturi iste. Optio, ut veniam?</p>
      <br />
      <p><i>The image below is only loaded when reached by the viewport.</i></p>
      <Image
        src='/images/profile.jpg'
        width={144}
        height={144}
        alt='My profile image'
      />
    </Layout>
  )
}
