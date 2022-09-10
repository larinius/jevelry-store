import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as Icon from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";

const BreadcrumbArea = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const { t } = useTranslation("common");

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
                      return (
                        <li key={breadcrumb.href}>
                          <Link
                            href={breadcrumb.href}
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
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
