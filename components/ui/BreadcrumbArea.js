import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BreadcrumbArea = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState("/api/product");
  const { t } = useTranslation("common");

  
  const { isLoading, error, data } = useQuery([query], () => axios.get(query));
  

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
            
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);


  useEffect(() => {
    const linkPath = router.asPath.split("/");
      
    const page = ""+linkPath.slice(-1);
    
    if(page.startsWith("sku-")){      
      setQuery(`/api/product/${page}`)
    }
  }, [breadcrumbs]);


  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <Icon.House />
                      </a>
                    </li>
                    {breadcrumbs.map((breadcrumb, i) => {

                      if(!isLoading && data?.data?.category?.title){
                        const cat = data?.data?.category.title.toLowerCase();
                        breadcrumb.breadcrumb = breadcrumb.breadcrumb.replace("product", t(cat)  );
                        breadcrumb.href = breadcrumb.href.replace("/product", `/store/${cat}`)
                      }

                      return (
                        <li
                          key={breadcrumb.href}
                          className="breadcrumb-item active"
                          aria-current={t(breadcrumb.breadcrumb)}
                        >
                          <Link href={breadcrumb.href}>
                            <a>{t(breadcrumb.breadcrumb)}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbArea;
